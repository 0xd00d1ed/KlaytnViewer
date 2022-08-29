const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const list = [];
const template = {
  category: undefined,
  contract: [],
};

const standard = clone(template);
standard.category = "표준";
import standard_erc20 from "./preset/standard/erc20.js";
standard.contract.push(standard_erc20);

const klayswap = clone(template);
klayswap.category = "클레이스왑";
import klayswap_factory from "./preset/klayswap/factory.js";
import klayswap_exchange from "./preset/klayswap/exchange.js";
import klayswap_governor from "./preset/klayswap/governor.js";
import klayswap_poolvoting from "./preset/klayswap/poolvoting.js";
klayswap.contract.push(klayswap_factory);
klayswap.contract.push(klayswap_exchange);
klayswap.contract.push(klayswap_poolvoting);
klayswap.contract.push(klayswap_governor);

const sigma = clone(template);
sigma.category = "시그마";
import sigma_vote from "./preset/sigma/vote.js";
import sigma_govern from "./preset/sigma/govern.js";
sigma.contract.push(sigma_vote);
sigma.contract.push(sigma_govern);

list.push(standard);
list.push(klayswap);
list.push(sigma);
export default list;
