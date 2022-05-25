import './_help.scss';

export default function Footer() {

    return (
        <footer>
            <div className="footer container">
                <p>kozh inc. {new Date().getFullYear()}</p>
                <a href="https://github.com/kozh-0">GitHub</a>
            </div>
        </footer>
    )
}