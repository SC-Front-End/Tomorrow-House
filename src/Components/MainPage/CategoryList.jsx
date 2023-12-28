import React from 'react';
import styled from 'styled-components';

const CategoryList = () => {
    return (
        <CategoryHere>
            <div className='nav'>
                <ul className='ul-list'>
                    {/* list_1 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-170260512138923955.png/512/none" alt="1" />
                        </figure>
                        <div className='li-text'>
                            <span>연말빅세일</span>
                        </div>
                    </li>
                    {/* list_2 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-169254392912279857.png/512/none" alt="2" />
                        </figure>
                        <div className='li-text'>
                            <span>BEST</span>
                        </div>
                    </li>
                    {/* list_3 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-169268342330570105.png/512/none" alt="3" />
                        </figure>
                        <div className='li-text'>
                            <span>오늘의딜</span>
                        </div>
                    </li>
                    {/* list_4 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-169778579216134500.png/512/none" alt="4" />
                        </figure>
                        <div className='li-text'>
                            <span>오픈런딜</span>
                        </div>
                    </li>
                    {/* list_5 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-170201036518116763.png/512/none" alt="4" />
                        </figure>
                        <div className='li-text'>
                            <span>행운출첵</span>
                        </div>
                    </li>
                    {/* list_6 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-169476674030637712.png/512/none" alt="5" />
                        </figure>
                        <div className='li-text'>
                            <span>프리미엄</span>
                        </div>
                    </li>
                    {/* list_7 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-169932191260999270.png/512/none" alt="6" />
                        </figure>
                        <div className='li-text'>
                            <span>신혼살림</span>
                        </div>
                    </li>
                    {/* list_8 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-170260539188040558.png/512/none" alt="7" />
                        </figure>
                        <div className='li-text'>
                            <span>베이직톤</span>
                        </div>
                    </li>
                    {/* list_9 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-169353225639708707.png/512/none" alt="8" />
                        </figure>
                        <div className='li-text'>
                            <span>오!쇼룸</span>
                        </div>
                    </li>
                    {/* list_10 */}
                    <li className='li-list'>
                        <figure>
                            <img src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-store_home_shortcut_sets-170078700204485935.png/512/none" alt="10" />
                        </figure>
                        <div className='li-text'>
                            <span>특가/혜택</span>
                        </div>
                    </li>
                </ul>
            </div>

        </CategoryHere>
    );
};

export default CategoryList;

const CategoryHere = styled.div`

.nav{
    display: flex;
    justify-content: center;
    margin-top: 35px;

}
ul {
    padding-left:30px;
    padding-right:30px;
    list-style:none;
}

li {
    font-size: 14px;
    float: left;
    font-weight: bold;
}

img{
    width: 50px;
    height: 50px;
    border-radius: 30%;
}

.li-text {
    text-align: center;
}


`;