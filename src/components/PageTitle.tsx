import styled from "styled-components";

type PageTitleProps = {
  title: string;
}

const PageTitle = (props : PageTitleProps) => {
  return (
    <>
      <PageTitle.Title>{props.title}</PageTitle.Title>
    </>
  )
}

PageTitle.Title = styled.h1`
  margin-bottom: 40px;
  color: #202124;
  grid-column: 1 / -1;
`;

export default PageTitle