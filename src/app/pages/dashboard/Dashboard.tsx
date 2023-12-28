import { useCallback, useState } from "react";

interface IListItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [list, setList] = useState<IListItem[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;
        e.currentTarget.value = "";
        setList((oldList) => {
          if (oldList.some((listItem) => listItem.title === value))
            return oldList;
          return [
            ...oldList,
            {
              title: value,
              isSelected: false,
            },
          ];
        });
      }
    }, []);
  return (
    <div className="">
      <p>Lista</p>

      <input type="text" onKeyDown={handleInputKeyDown} />
      <p>{list.filter((listItem) => listItem.isSelected).length}</p>
      <ul>
        {list.map((listItem, index: number) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() => {
                  setList((oldList) => {
                    return oldList.map((oldlistItem) => {
                      const newIsSelected =
                        oldlistItem.title === listItem.title
                          ? !oldlistItem.isSelected
                          : oldlistItem.isSelected;
                      return {
                        ...oldlistItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
