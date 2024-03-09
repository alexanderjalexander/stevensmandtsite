import styles from "./header.module.css"

export default function Header({text, desc}: { text: string, desc?:string }) {
    return (
        <div className={styles.header_paper}>
            <div
                className="static pt-[50vh] pb-8 px-8">
                <h1 className={styles.header_text}>{text}</h1>
                <p  className="m-0">{desc}</p>
            </div>
        </div>
    )
}