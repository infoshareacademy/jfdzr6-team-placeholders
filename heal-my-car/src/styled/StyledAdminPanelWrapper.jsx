import styled from "styled-components";

export const StyledAdminPanelWrapper = styled.div`
display: flex;
flex-direction: row;
& .MuiDivider-root {
    margin-left: 20px;
    margin-right: 20px;
}
& .side-menu {
    width: 120px;
    height: 100%;
}
& .content {
width: 100%;
}
`