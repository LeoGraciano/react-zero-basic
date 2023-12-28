import { useCallback, useEffect, useState } from "react";
import { ITask, taskService } from "../../shared/services";
import { ApiException } from "../../shared/services/api/ErrorException";

export const Dashboard = () => {
  const [list, setList] = useState<ITask[]>([]);

  useEffect(() => {
    taskService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setList(result);
      }
    });
  }, []);

  const handleToggleComplete = useCallback(
    (id: number) => {
      const taskUpdate = list.find((task) => task.id === id);

      if (!taskUpdate) return;

      taskService
        .updateById(id, {
          ...taskUpdate,
          isCompleted: !taskUpdate.isCompleted,
        })
        .then((result) => {
          if (result instanceof ApiException) {
            alert(result.message);
          } else {
            setList((oldList) => {
              return oldList.map((oldListItem) => {
                if (oldListItem.id === id) return result;
                return oldListItem;
              });
            });
          }
        });
    },
    [list]
  );
  const handleToggleDelete = useCallback((id: number) => {
    taskService.deleteById(id).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setList((oldList) => {
          return oldList.filter((oldListItem) => oldListItem.id !== id);
        });
      }
    });
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;

          const value = e.currentTarget.value;
          e.currentTarget.value = "";

          if (list.some((listItem) => listItem.title === value)) return;

          taskService
            .create({ title: value, isCompleted: false })
            .then((result) => {
              if (result instanceof ApiException) {
                alert(result.message);
              } else {
                setList((oldList) => [...oldList, result]);
              }
            });
        }
      },
      [list]
    );

  return (
    <div className="">
      <p>Lista</p>

      <input type="text" onKeyDown={handleInputKeyDown} />
      <p>{list.filter((listItem) => listItem.isCompleted).length}</p>
      <ul>
        {list.map((listItem, index: number) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => handleToggleComplete(listItem.id)}
              />
              {listItem.title}
              <button onClick={() => handleToggleDelete(listItem.id)}>
                Apagar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
