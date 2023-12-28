import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<ITask[] | ApiException> => {
  try {
    const { data } = await Api().get("/tasks");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar a API");
  }
};
const getById = async (id: number): Promise<ITask | ApiException> => {
  try {
    const { data } = await Api().get(`/tasks/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao consultar a API");
  }
};
const create = async (
  body: Omit<ITask, "id">
): Promise<ITask | ApiException> => {
  try {
    const { data } = await Api().post<any>(`/tasks`, body);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao criar registro");
  }
};
const updateById = async (
  id: number,
  body: ITask
): Promise<ITask | ApiException> => {
  try {
    const { data } = await Api().put(`/tasks/${id}`, body);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao atualizar o registro");
  }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/tasks/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Error ao atualizar o registro");
  }
};

export const taskService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
