import React, {useCallback,useState,useMemo } from 'react'
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { flatten } from 'lodash';
import styled from "styled-components"
import Product from './Product';
import { getApiList } from '../../remote/api';
import ProductsFilter from './ProductsFilter';
import ScrollToTopButton from './ScrollToTopButton';

const Products = ({ categoryId }) => {
    console.log("확인확인",categoryId)
    const [filtered, setFiltered] = useState('');
    const { data, hasNextPage = false, fetchNextPage, isFetching } = useInfiniteQuery(
        [categoryId],
        ({ pageParam = 0 }) => getApiList(pageParam,categoryId, 12),
        {
            getNextPageParam: (lastPage, pages) => {
                return lastPage.lastVisible;  // 다음 페이지 번호 반환
            },
            suspense: true
        }
    );

    const sortItems = (items, filter) => {
        const itemsCopy = [...items];
    
        switch (filter) {
            case '인기순':  
                return itemsCopy.sort((a, b) => a.itemId - b.itemId);

            case '최신순':
                return itemsCopy.sort((a, b) => b.createDate - a.createDate);
    
            case '높은 가격순':
                return itemsCopy.sort((a, b) => b.unitPrice - a.unitPrice);
    
            case '낮은 가격순':
                return itemsCopy.sort((a, b) => a.unitPrice - b.unitPrice);
    
            default:
                return itemsCopy.sort((a, b) => a.itemId - b.itemId);
        }
    };

    const sortedList = useMemo(() => {
        if (data) {
            const list = flatten(data.pages.map(({ items }) => items));
            console.log("데이터 확인",list)
            return sortItems(list, filtered);
        }
        return [];
    }, [data, filtered]);

    const loadMore = useCallback(() => {
        if (!hasNextPage || isFetching) return;
        fetchNextPage();
    }, [fetchNextPage, hasNextPage, isFetching]);

    return (
        <div>
            <Container>
                <Wrap>

                    <InfiniteScroll
                        dataLength={sortedList.length}
                        hasMore={hasNextPage}
                        loader={<Product.Skeleton />}
                        next={loadMore}
                        style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '940px', justifyContent: 'flex-start', margin: '0 auto', padding: '0 1rem' }}
                    >
                        <ProductsFilter selected={filtered} onChangeFilter={setFiltered} />

                        {sortedList.map((product, index) => (
                            <Product key={index} categoryId={categoryId} id={product.postId} src={product.thumbNailImgPath} name={product.itemName} price={product.unitPrice.toLocaleString()} />
                        ))}
                    
                    </InfiniteScroll>
                    <ScrollToTopButton/>
                </Wrap>
            </Container>
        </div>
    );
};

export default Products;

const Container = styled.div`
    max-width: 940px;
    justify-content: center;
    flex-grow: 1; /* 남은 공간을 모두 차지 */
    margin: 0;
    padding: 0 1rem;
`;
const Wrap = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
`;