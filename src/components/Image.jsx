import logo from '../assets/images/webpack-logo.png';

function Image() {
    return (
        <div>
            <p>This is an image loaded with 'asset/resource' from Webpack:</p>
            <img src={logo} alt="Image loaded with 'asset/resource' from Webpack" />
        </div>
    );
}

export default Image;
