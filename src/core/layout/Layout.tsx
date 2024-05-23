import { ReactNode } from "react";
import { MainHeader } from "./MainHeader";
import { Container, Content } from "./styled";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container>
            <MainHeader />
            <Content>
                {children}
            </Content>
        </Container>
    );
};
