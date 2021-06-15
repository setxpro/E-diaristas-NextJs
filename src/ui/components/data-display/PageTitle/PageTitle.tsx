import React from 'react';

import { PageTitleContainer, PageTitleStyled, PageSubTitleStyled } from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subTitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = props => {
    return(
        <PageTitleContainer>
            <PageTitleStyled>{props.title}</PageTitleStyled>
            <PageSubTitleStyled>{props.subTitle}</PageSubTitleStyled>
        </PageTitleContainer>
    );
}

export default PageTitle;