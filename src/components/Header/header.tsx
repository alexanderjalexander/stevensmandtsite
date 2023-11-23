import {Flex} from "@mantine/core"
import Image from "next/image"
import styles from "./header.module.css"

export default function Header({text, desc}: { text: string, desc?:string }) {
    return (
        <div className={styles.header_paper}>
            <div
                className={styles.header_paper_container}>
                <h1 className={styles.header_text}>{text}</h1>
                <p  className={styles.header_desc}>{desc}</p>
            </div>
        </div>
    )
}