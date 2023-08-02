import React from 'react';
import { css, styled } from 'styled-components';

export enum BtnType {
    BTN_SUBMIT = 'BTN_SUBMIT',
    BTN_DONE = 'BTN_DONE',
    BTN_CANCEL = 'BTN_CANCEL',
    BTN_DELETE = 'BTN_DELETE'
}
export enum BtnStyle {
    BTN_HALF = 'BTN_HALF',
    BTN_ALL = 'BTN_ALL',
    BTN_BASIC = 'BTN_BASIC'
}

interface ButtonProps {
    type: 'button' | 'submit';
    children: React.ReactNode;
    btnType: BtnType;
    btnStyle: BtnStyle;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type = 'button', children, btnType, btnStyle, disabled, onClick }: ButtonProps) => {
    return (
        <StButton type={type} $btnType={btnType} $btnStyle={btnStyle} disabled={disabled} onClick={onClick}>
            {children}
        </StButton>
    );
};

// 공통 css style
const btnDefaultStyle = css`
    padding: 13px 25px;
    border-radius: 5px;
`;

// 타입별 style
const StButton = styled.button<{ $btnType: BtnType; $btnStyle: BtnStyle }>`
    ${(props) => {
        switch (props.$btnType) {
            case BtnType.BTN_SUBMIT:
                return css`
                    ${btnDefaultStyle}
                    background-color: #5644dd;
                    color: #fff;
                    font-weight: bold;
                `;
            case BtnType.BTN_DONE:
                return css`
                    ${btnDefaultStyle}
                    background-color: #0084ff;
                    color: #fff;
                    font-weight: bold;
                `;

            case BtnType.BTN_CANCEL:
                return css`
                    ${btnDefaultStyle}
                    background-color: #ff6262;
                    color: #fff;
                    font-weight: bold;
                `;
            case BtnType.BTN_DELETE:
                return css`
                    ${btnDefaultStyle}
                    background-color: #7e7e7e;
                    color: #fff;
                    font-weight: bold;
                `;
            default:
                return ``;
        }
    }}
    ${(props) => {
        switch (props.$btnStyle) {
            case BtnStyle.BTN_HALF:
                return css`
                    ${btnDefaultStyle}
                    width: calc((100% - 10px)/2);
                `;
            case BtnStyle.BTN_ALL:
                return css`
                    ${btnDefaultStyle}
                    width: 100%;
                `;

            case BtnStyle.BTN_BASIC:
                return css`
                    ${btnDefaultStyle}
                `;
            default:
                return ``;
        }
    }}
`;

export default Button;
