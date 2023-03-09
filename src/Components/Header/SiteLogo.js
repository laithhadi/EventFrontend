import { ReactComponent as OurLogo } from '../../Assets/img/HPCCL_larger.svg';

function Logo() {
    return (
        <OurLogo
            alt="Logo"
            src="/HPCCL_larger.svg"
            href='#'
            width="150"
            height="40"
            className="d-inline-block align-top"
        />
    )
}

export default Logo;