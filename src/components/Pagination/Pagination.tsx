import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import { setActivePage } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";
import Button from "../Button/Button";

import styles from "./Pagination.module.scss";

const Pagination = () => {
    const { totalPage, activePage, pagesChunk } = useAppSelector(store => store.adverstaning);

    const dispatch = useAppDispatch();

    const handlerPage = (value: number) => {
        dispatch(setActivePage(value));
    };

    return (
        <div className={styles.root}>
            <Button variant="text" color="dark-blue" size="content" onClick={() => handlerPage(activePage - 1)}>
                <img src="Arrowleft.svg" alt="prev" />
            </Button>
            <Button
                variant={1 == activePage ? "text-active" : "text"}
                color="dark-blue"
                size="content"
                onClick={() => handlerPage(1)}>
                1
            </Button>
            {activePage >= 4 && (
                <Button variant="text" color="dark-blue" size="content">
                    ...
                </Button>
            )}
            {pagesChunk.map((item: any, i: number) => {
                return (
                    <Button
                        variant={item == activePage ? "text-active" : "text"}
                        color="dark-blue"
                        size="content"
                        key={i}
                        onClick={() => handlerPage(item)}>
                        {item}
                    </Button>
                );
            })}
            {activePage < totalPage - 2 && (
                <Button variant="text" color="dark-blue" size="content">
                    ...
                </Button>
            )}
            <Button
                variant={totalPage == activePage ? "text-active" : "text"}
                color="dark-blue"
                size="content"
                onClick={() => handlerPage(totalPage)}>
                {totalPage}
            </Button>
            <Button variant="text" color="dark-blue" size="content" onClick={() => handlerPage(activePage + 1)}>
                <img src="Arrowright.svg" alt="next" />
            </Button>
        </div>
    );
};

export default Pagination;
