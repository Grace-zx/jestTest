/*
 * @Author: zhouxu
 * @Date: 2023-05-24 14:01:47
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */

/** 城市数据库 */

let cityes = [];
const defaultCitys = ['Vienna', 'San Juan'];

// export const initializeCityDatabase = () => {
//   cityes = ['Vienna', 'San Juan'];
// };

// export const clearCityDatabase = () => {
//   cityes = [];
// };

const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(defaultCitys);
    });
  });
};
const clearDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
    });
  });
};
export const initializeCityDatabase = async () => {
  cityes = await getDataPromise();
};

export const clearCityDatabase = async () => {
  cityes = await clearDataPromise();
};

export const isCity = (city) => {
  if (cityes.includes(city)) return true;
  return false;
};

/** 食品数据库 */

let goods = [];

const defaultgGoods = [
  { city: 'Vienna', goods: ['Wiener Schnitzel'] },
  { city: 'San Juan', goods: ['Mofongo'] },
];

const getGoodsPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(defaultgGoods);
    });
  });
};
const clearGoodsromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
    });
  });
};
export const initializeFoodDatabase = async () => {
  goods = await getGoodsPromise();
};

export const clearGoodsDatabase = async () => {
  goods = await clearGoodsromise();
};

export const isValidCityFoodPair = (city, gdName) => {
  const gods = goods.find((item) => item.city === city);
  if (gods && gods.goods.includes(gdName)) return true;
  return false;
};
