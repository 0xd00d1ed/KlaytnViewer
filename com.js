var defaultRpcUrl = "https://public-node-api.klaytnapi.com/v1/cypress";
var contract;
var caver;
var presetList;

// 블록체인 통신을 위한 Caver 라이브러리
const setCaver = (rpcUrl) => {
    if (!rpcUrl) return;
    return (caver = new Caver(new Caver.providers.HttpProvider(rpcUrl)));
};

// 컨트랙트 주소와 ABI를 입력하여 컨트랙트 정보를 설정한다.
const setContract = (address, abi) => {
    if (!address && !abi) return;
    return (contract = new caver.contract(JSON.parse(abi), Caver.utils.toChecksumAddress(address)));
};

// 정의된 프리셋을 불러온다.
const setPreset = (preset) => {
    presetList = preset;
    return presetList;
};

// 컨트랙트의 함수 정보를 불러온다.
const getJsonInterface = () => {
    if (!contract) return;
    return contract._jsonInterface;
};

// 함수를 소스코드가 아닌 문자열로 실행할 수 있는 기능
const executeFunctionByName = async (functionName, context, args) => {
    let namespaces = functionName.split(".");
    let func = namespaces.pop();
    for (let i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return await context[func].apply(context, args);
};

// 설정된 컨트랙트의 이벤트를 불러온다. 블록 기간으로 조회가 가능한데,
// 이벤트 데이터가 너무 많을 시 오류가 발생하므로 재귀적인 방법으로
// 분할 정복하여 이벤트를 가져온다.
const readEventsRange = (contract, event, options, callback) =>
    new Promise((resolve, reject) => {
        (async () => {
            contract.getPastEvents(event, options, async (errors, events) => {
                if (!errors) {
                    console.log(
                        "starts processing blocks",
                        options.fromBlock,
                        "..",
                        options.toBlock
                    );
                    for (const event of events) {
                        await callback(event);
                    }
                    console.log("done processing blocks", options.fromBlock, "..", options.toBlock);
                    resolve();
                } else {
                    const middle = options.fromBlock.plus(options.toBlock).div(2).integerValue();
                    let message =
                        "Error [" +
                        options.fromBlock +
                        ".." +
                        options.toBlock +
                        "] " +
                        "->  [" +
                        options.fromBlock +
                        ".." +
                        middle +
                        "] " +
                        "and [" +
                        (middle + 1) +
                        ".." +
                        options.toBlock +
                        "]";
                    console.log(message);
                    const leftOpts = structuredClone(options);
                    const rightOpts = structuredClone(options);
                    leftOpts.toBlock = middle;
                    await readEventsRange(contract, event, leftOpts, callback);
                    rightOpts.fromBlock = middle + 1;
                    await readEventsRange(contract, event, rightOpts, callback);
                    resolve();
                }
            });
        })();
    });
