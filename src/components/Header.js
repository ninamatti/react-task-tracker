import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'green'
// }

export default Header
