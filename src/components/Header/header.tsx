import {Paper} from "@mantine/core"
import Image from "next/image"
import styles from "./header.module.css"

export default function Header({text, desc}: { text: string, desc?:string }) {
    return (
        <div>
            {/* TODO: Figure out why tf images don't load properly */}
            {/*<Image alt="" src="/cover.tif" fill={true} />*/}
            <Paper>
                <h1 className={styles.header_text}>{text}</h1>
                <p>{desc}</p>
            </Paper>
        </div>

    )
}