import './Btn.scss';

export const Btn = ({textContent, Icon, paddingLeft, paddingRight}) => {
    return (
        <div className={`btn`} style={{ paddingRight: paddingRight, paddingLeft: paddingLeft, columnGap: Icon && '0.4rem'}}>{Icon && <Icon />}{textContent}</div>
    )
}