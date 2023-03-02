import BayiModel from "../models/bayi.model.js";

export async function createBayi(input) {
  try {
    return BayiModel.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getDataBayi(query = {}, option = "") {
  try {
    return BayiModel.find(query).populate(option);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateDataBayi(query, update, options) {
  try {
    return BayiModel.findOneAndUpdate(query, update, options);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteDataBayi(query) {
  try {
    return BayiModel.deleteOne(query);
  } catch (error) {
    throw new Error(error);
  }
}
