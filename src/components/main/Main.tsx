import React from 'react';

const Main = () => {
    return (
        <main>
            <form action="">
                <input type="text" />
                <input type="text" />
                <button>등록</button>
            </form>
            <div>
                <div>
                    <h2>TODO</h2>
                    <div>
                        <div>
                            <h3>제목</h3>
                            <p>내용</p>
                            <button>삭제</button>
                            <button>완료</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>DONE</h2>
                    <div>
                        <div>
                            <h3>제목</h3>
                            <p>내용</p>
                            <button>삭제</button>
                            <button>취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
