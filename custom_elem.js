class ViewMethod extends HTMLElement {
    constructor() {
        super();
    }

    get method() {
        return this._method;
    }
    set method(value) {
        this._method = value;
        this.render();
    }

    render() {
        if (this.method.stateMutability != "view" && this.method.type != "event") return;
        let type;
        if (this.method.stateMutability) type = "view";
        else type = "event";
        const frame = this.appendChild(document.createElement("div"));
        frame.className = "method-row";

        const header = frame.appendChild(document.createElement("div"));
        header.className = "colgrid-fit-auto content";

        const methodName = header.appendChild(document.createElement("div"));
        methodName.className = "method-name";

        const button = header.appendChild(document.createElement("button"));
        button.className = "method-retrieve";
        button.innerText = "조회";

        const hline = frame.appendChild(document.createElement("div"));
        hline.className = "hline-thin";

        if (this.method.desc) {
            methodName.innerText = this.method.desc;
        } else {
            methodName.innerText = this.method.name;
        }
        if (type == "event") {
            methodName.innerText += " (이벤트)";
        }

        let count = 1;
        const inputArgs = [];
        const filterElems = {};

        for (const input of this.method.inputs) {
            const paramInput = frame.appendChild(document.createElement("div"));
            paramInput.className = "input-name content";

            const inputText = document.createElement("input");
            inputText.type = "text";
            inputText.className = "input-text textbox1";
            inputText.style.width = "100%";

            switch (type) {
                case "view":
                    paramInput.innerText = "[입력값" + count + "]";
                    frame.appendChild(inputText);
                    break;
                case "event":
                    if (input.indexed == true) {
                        filterElems[input.name] = inputText;
                        paramInput.innerText = "[이벤트필터" + count + "]";
                        frame.appendChild(inputText);
                    }
                    break;
            }

            inputArgs.push(inputText);

            if (input.name) {
                paramInput.innerText += "이름:" + input.name + ", ";
            }
            paramInput.innerText += "자료형:" + input.type;
            count++;
        }
        const result = document.createElement("div");
        result.className = "result-text content";
        result.style.wordWrap = "break-word";
        result.innerText = "결과";

        switch (type) {
            case "view":
                button.onclick = async () => {
                    const func = await executeFunctionByName(
                        "contract.methods." + this.method.name,
                        window,
                        inputArgs.map((input) => input.value)
                    );
                    try {
                        const execResult = await func.call();
                        document.querySelector("#error").innerText = "";
                        if (typeof execResult == "object") {
                            let obj = {};
                            for (let i = 0; i < this.method.outputs.length; i++) {
                                obj[this.method.outputs[i].name] = execResult[i];
                            }
                            result.innerText = JSON.stringify(obj, null, 2);
                        } else {
                            result.innerText = execResult;
                        }
                    } catch (ex) {
                        console.log(ex);
                        errorState = ex;
                        document.querySelector("#error").innerText = errorState;
                    }
                };
                break;
            case "event":
                let fromBlock = document.createElement("input");
                fromBlock.type = "text";
                fromBlock.className = "input-text textbox1";

                let toBlock = document.createElement("input");
                toBlock.type = "text";
                toBlock.className = "input-text textbox1";

                frame.appendChild(document.createElement("div")).className = "hline-thin";
                const fromElem = frame.appendChild(document.createElement("div"));
                fromElem.className = "content";
                fromElem.innerText = "시작블록";
                frame.appendChild(fromBlock);
                const toElem = frame.appendChild(document.createElement("div"));
                toElem.className = "content";
                toElem.innerText = "종료블록";
                frame.appendChild(toBlock);
                frame.appendChild(document.createElement("div")).className = "hline-thin";

                button.onclick = async () => {
                    result.innerText = "";
                    let resultCounter = 0;

                    let options = {
                        fromBlock: BigNumber(fromBlock.value),
                        toBlock: BigNumber(toBlock.value),
                        filter: undefined,
                    };

                    for (const prop in filterElems) {
                    }

                    await readEventsRange(
                        window["contract"],
                        this.method.name,
                        options,
                        async (e) => {
                            result.innerText += `블록번호: ${e.blockNumber}\n`;
                            for (let i = 0; i < this.method.inputs.length; i++) {
                                result.innerText += `${this.method.inputs[i].name}: ${e.returnValues[i]}\n`;
                            }
                            result.innerText += `\n`;
                            resultCounter++;
                        }
                    );
                    if (resultCounter <= 0) result.innerText += `기록이 없습니다.\n`;
                };
                break;
        }

        frame.appendChild(result);
    }
}

class PresetModal extends HTMLElement {
    constructor() {
        super();
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
        this.querySelector(".bg-modal").style.display = value ? "block" : "none";
    }
    get presets() {
        return this._presets;
    }
    set presets(value) {
        this._presets = value;
        this.render();
    }

    render() {
        if (this.querySelector(".bg-modal")) {
            this.removeChild(this.querySelector(".bg-modal"));
        }

        const frame = this.appendChild(document.createElement("div"));
        frame.className = "bg-modal";
        frame.style.display = "none";
        const modalWindow = frame.appendChild(document.createElement("div"));
        modalWindow.className = "modalwindow";

        const modalHeader = modalWindow.appendChild(document.createElement("div"));
        modalHeader.className = "modal-header colgrid-fit-auto";

        const modalTitle = modalHeader.appendChild(document.createElement("div"));
        modalTitle.style.margin = "auto 20px";
        modalTitle.innerText = "프리셋 불러오기";

        const xButton = modalHeader.appendChild(document.createElement("input"));
        xButton.className = "xbutton";
        xButton.type = "button";
        xButton.value = "X";
        xButton.onclick = () => {
            this.visible = false;
        };

        const hline = modalWindow.appendChild(document.createElement("div"));
        hline.className = "hline";

        const modalContent = modalWindow.appendChild(document.createElement("div"));
        modalContent.className = "modal-content";

        for (const preset of this.presets || []) {
            const presetRow = modalContent.appendChild(document.createElement("div"));
            presetRow.className = "preset-row";

            const categoryName = presetRow.appendChild(document.createElement("div"));
            categoryName.className = "category-name";
            categoryName.innerText = preset.category;

            const contractContent = presetRow.appendChild(document.createElement("div"));
            contractContent.className = "contract-content";

            for (const contract of preset.contract) {
                const contractRow = contractContent.appendChild(document.createElement("div"));
                contractRow.className = "contract-row";

                const contractTitle = contractRow.appendChild(document.createElement("div"));
                contractTitle.className = "contract-title";

                const contractDesc = contractRow.appendChild(document.createElement("div"));
                contractDesc.className = "contract-desc";
                contractDesc.innerText = contract.description;

                const loadPresetButton = contractRow.appendChild(document.createElement("button"));
                loadPresetButton.className = "preset-load";
                loadPresetButton.innerText = "불러오기";
                loadPresetButton.onclick = () => {
                    this.visible = false;
                    contractAddressElement.value = contract.address;
                    contractAbiElement.value = contract.abi;
                };
            }
        }

        this.appendChild(frame);
    }
}
customElements.define("viewfn-viewer", ViewMethod);
customElements.define("preset-modal", PresetModal);
