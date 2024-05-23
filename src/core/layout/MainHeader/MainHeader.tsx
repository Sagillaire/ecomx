import Image from "next/image";
import { Header } from "../styled";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { CountIndicator } from "@/core/components";
import { NavigationSection, TopSection } from "./styled";
import { PiShoppingCartThin, PiUserCircleThin } from "react-icons/pi";

export const MainHeader = () => {
    return (
        <Header>
            <TopSection>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <HiOutlinePhone />
                    Hotline: (34) 648675
                </div>
                <span>Welcome to Ecomx!</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        Currency:&nbsp;<b>USD</b>
                        &nbsp;<IoIosArrowDown />
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        Language:&nbsp;<b>EN</b>
                        &nbsp;<IoIosArrowDown />
                    </span>
                </div>
            </TopSection>

            <NavigationSection>
                <Image
                    width={100}
                    height={50}
                    alt="ecomx_logo"
                    style={{ userSelect: 'none' }}
                    src="/images/shoes_logo_cut.png"
                />

                <div style={{ display: 'flex', gap: '10px', color: '#4f4f4f' }}>
                    <CiSearch size={25} />
                    <CountIndicator count={7} icon={PiShoppingCartThin} />
                    <CountIndicator icon={PiUserCircleThin} />
                </div>
            </NavigationSection>
        </Header>
    );
};
