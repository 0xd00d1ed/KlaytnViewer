var defaultRpcUrl = 'https://public-node-api.klaytnapi.com/v1/cypress';
var contract;
var caver;
var presetList;

const setCaver = (rpcUrl) => {
    if (!rpcUrl) return;
    return caver = new Caver(new Caver.providers.HttpProvider(rpcUrl));
}

const setContract = (address, abi) => {
    if (!address && !abi) return;
    return contract = new caver.contract(JSON.parse(abi), Caver.utils.toChecksumAddress(address));
}

const setPreset = (preset) => {
    presetList = preset;
    return presetList;
}

const getJsonInterface = () => {
    if (!contract) return;
    return contract._jsonInterface;
}

const executeFunctionByName = async (functionName, context, args) => {
    let namespaces = functionName.split(".");
    let func = namespaces.pop();
    for (let i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return await context[func].apply(context, args);
}