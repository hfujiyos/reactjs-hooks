import React, { useState } from "react"
import styles from "./TaskItem.module.css"
import { ListItem, TextField, Grid } from "@material-ui/core"
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import { db } from "./firebase"

/**
 * Props型定義
 * @param id tasks親ｽﾃｰﾄ
 * @param title tasks親ｽﾃｰﾄ
 */
interface PROPS {
  id: string
  title: string
}

/**
 * TaskItemｺﾝﾎﾟｰﾈﾝﾄ
 * @param props ﾌﾟﾛｯﾌﾟｽ
 * @returns ﾀｽｸ行ﾋﾞｭｰ
 * @description 全ｺﾝﾎﾟｰﾈﾝﾄへHooksStateを配布
 */
const TaskItem: React.FC<PROPS> = (props) => {
  // titleｽﾃｰﾄ定義
  const [title, setTitle] = useState(props.title)

  /**
   * editTask関数
   * @description 受取Propsでﾃﾞｰﾀﾍﾞｰｽのﾃﾞｰﾀ更新
   */
  const editTask = () => {
    db.collection("tasks").doc(props.id).set({ title: title }, { merge: true })
  }

  /**
   * deleteTask関数
   * @description 受取Propsでﾃﾞｰﾀﾍﾞｰｽのﾃﾞｰﾀ削除
   */
  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete()
  }

  // ﾀｽｸ行ﾋﾞｭｰ
  return (
    <ListItem>
      <h2>{props.title}</h2>
      <Grid container justifyContent="flex-end">
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          label="Edit task"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Grid>
      <button className={styles.taskitem__icon} onClick={editTask}>
        <EditOutlinedIcon />
      </button>
      <button className={styles.taskitem__icon} onClick={deleteTask}>
        <DeleteOutlineOutlinedIcon />
      </button>
    </ListItem>
  )
}

export default TaskItem
