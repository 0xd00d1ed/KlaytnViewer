let errorState;
let rpcAddrElement;
let contractAddressElement;
let contractAbiElement;
let contractTableElement;
let modalElement;
let viewElement;

window.addEventListener("DOMContentLoaded", () => {
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
    e.target.style.height = 4 + e.target.scrollHeight + "px";
};

const setRpcClick = () => {
    setCaver(rpcAddrElement.value);
};

const openModal = () => {
    var presetModal = document.querySelector("#preset");
    if (!presetModal.presets) presetModal.presets = presetList;
    presetModal.visible = true;
};

const setContractClick = async () => {
    document.querySelector("#error").innerText = "";

    setContract(contractAddressElement.value, contractAbiElement.value);
    const json = JSON.parse(contractAbiElement.value);
    if (!json) return;
    const tb = contractTableElement;
    clearChildElements(tb);

    for (const method of json) {
        const viewMethodElem = document.createElement("viewfn-viewer");
        viewMethodElem.method = method;
        tb.appendChild(viewMethodElem);
    }
};
