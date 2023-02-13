import svg from '../assets/svg/react-logo.svg';

function SVGViewer() {
    return (
        <div>
            <p>This is an SVG file loaded with 'asset/inline' from Webpack:</p>
            <img src={svg} alt="SVG image loaded with 'asset/inline' from Webpack" />
        </div>
    );
}

export default SVGViewer;
