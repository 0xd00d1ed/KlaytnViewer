let errorState;
let rpcAddrElement;
let contractAddressElement;
let contractAbiElement;
let contractTableElement;
let modalElement;

window.addEventListener('DOMContentLoaded', () => {
    modalElement = document.querySelector(".bg-modal");
    rpcAddrElement = document.getElementById("rpcAddr");
    contractAddressElement = document.getElementById("address");
    contractAbiElement = document.getElementById("abi");
    contractTableElement = document.getElementById("contract-table");
    viewElement = document.getElementById("view");
    rpcAddr.value = defaultRpcUrl;
    setCaver(rpcAddr.value);
});

const rpcAddrInput = (e) => {
    let text = e.target.value;
    e.target.value = text.replace(/\s/g, "");
    e.target.style.height = "";
    e.target.style.height = (4 + e.target.scrollHeight) + "px";
}

const setRpcClick = () => {
    setCaver(rpcAddrElement.value);
}

const toggleModal = () => {
    modalElement.classList.toggle('show');
}

const presetDraw = () => {
    if (!presetList) return;
    const presetRow = document.querySelector('#preset-row');
    const contractRow = document.querySelector('#contract-row');

    for (const preset of presetList) {
        const presetRowClone = document.importNode(presetRow.content, true);
        presetRowClone.querySelector('.category-name').innerText = preset.category;
        for (const contract of preset.contract) {
            const contractRowClone = document.importNode(contractRow.content, true);
            contractRowClone.querySelector('.contract-title').innerText = '컨트랙트명: ' + contract.title;
            contractRowClone.querySelector('.contract-description').innerText = '설명: ' + contract.description;
            contractRowClone.querySelector('.preset-load').onclick = () => {
                contractAddressElement.value = contract.address;
                contractAbiElement.value = contract.abi;
                toggleModal();
            };
            presetRowClone.querySelector('.contract-content').appendChild(contractRowClone);
        }
        document.querySelector('.modal-content').appendChild(presetRowClone);
    }
}

const setContractClick = async () => {
    document.querySelector('#error').innerText = "";

    setContract(contractAddressElement.value, contractAbiElement.value);
    const json = JSON.parse(contractAbiElement.value);
    if (!json) return;
    const tb = contractTableElement;
    while (tb.firstChild) {
        tb.removeChild(tb.firstChild);
    }
    const headerRow = document.querySelector('#method-top-row');
    const inputRow = document.querySelector('#method-body-row');
    const retrieveRow = document.querySelector('#method-bottom-row');

    for (const method of json) {
        if (method.stateMutability !== 'view') continue;

        const div = document.createElement('div');
        const headerClone = document.importNode(headerRow.content, true);
        const methodName = headerClone.querySelector('.method-name');

        if (method.desc) {
            methodName.innerText = method.desc;
        }
        else {
            methodName.innerText = method.name;
        }

        const inputArgs = [];
        let count = 1;
        for (const input of method.inputs) {
            const inputClone = document.importNode(inputRow.content, true);
            const inputName = inputClone.querySelector('.input-name');

            inputName.innerText = "[입력값" + count + "]";
            count++;
            if (input.name) {
                inputName.innerText += '이름:' + input.name + ', ';
            }

            inputName.innerText += '자료형:' + input.type;
            inputArgs.push(inputClone.querySelector('.input-text'));
            headerClone.appendChild(inputClone);
        }

        let retrieveClone = document.importNode(retrieveRow.content, true);

        headerClone.appendChild(retrieveClone);

        const resultText = headerClone.querySelector('.result-text');

        headerClone.querySelector('.method-retrieve').onclick = async () => {
            const func = await executeFunctionByName('contract.methods.' + method.name, window, inputArgs.map(x => x.value));
            try {
                const result = await func.call();
                document.querySelector('#error').innerText = "";
                if(typeof(result) == 'object') {
                    let obj = {};
                    for (let i = 0; i < method.outputs.length; i++) {
                        obj[method.outputs[i].name] = result[i];
                    } 
                    resultText.innerText = JSON.stringify(obj, null, 2);
                }
                else {
                    resultText.innerText = result;
                }
            }
            catch (ex) {
                console.log(ex);
                errorState = ex;
                document.querySelector('#error').innerText = errorState;
            }
        };
        div.appendChild(headerClone);
        div.className = 'method-row';
        tb.appendChild(div);

    }
}