import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--header);
    padding: 11px 16px;
`;

export const GithubLogo= styled(FaGithub)`
    fill: var(--logo);
    width: 42px;
    height: 42px;
    flex-shrink: 0;
`;

export const SearchForm= styled.form`
    padding-left: 16px;
    width: 100%;
    input{
        width: 100%;
        background: var(--search);
        outline: 0;
        border-radius: 5px;
        padding: 7px 12px;

        &:focus {
            width: 318px;
        }

        transition: width .2s ease-out, color .2s ease-out;
    }
`;


