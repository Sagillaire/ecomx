import { IconType } from "react-icons";

export const CountIndicator = ({ icon, count }: { icon: IconType, count?: number }) => {
    const PropIcon = icon;

    return (
        <div style={{ position: 'relative' }}>
            <PropIcon size={25} />
            {count && (
                <span style={{
                    top: -7,
                    right: -7,
                    width: '15px',
                    height: '15px',
                    padding: '3px',
                    display: 'flex',
                    fontSize: '9px',
                    fontWeight: 'bold',
                    color: '#f6f6f6',
                    borderRadius: '50%',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#13d467',
                }}>
                    {count}
                </span>
            )}
        </div>
    );
};
