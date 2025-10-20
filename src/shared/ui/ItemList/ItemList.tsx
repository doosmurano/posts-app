import { Fragment } from "react";
import { ReactNode } from "react";

type ItemWithId = {
    id: number;
}

type ItemListProps<T extends ItemWithId> = {
    items: T[] | undefined;
    renderItem: (item: T) => ReactNode;
}

export const ItemList = <T extends ItemWithId>({ 
    items, 
    renderItem 
}: ItemListProps<T>) => {
    if (!items || items.length === 0) {
        return (
            <p>Нет данных</p>
        );
    }

    return (
        <div>
            {items.map((item) => (
                <Fragment key={item.id}>
                    {renderItem(item)}
                </Fragment>
            ))}
        </div>
    );
};
