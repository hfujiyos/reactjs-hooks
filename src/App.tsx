import React, { useState, useEffect } from "react"
import styles from "./App.module.css"
import { FormControl, List, TextField } from "@material-ui/core"
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos"
import { makeStyles } from "@material-ui/styles"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { db, auth } from "./firebase"
import TaskItem from "./TaskItem"

/**
 * useStyles関数式
 * @param field ﾌﾟﾛｯﾌﾟｽ
 * @param list ﾌﾟﾛｯﾌﾟｽ
 * @returns useStyles｜ｽﾀｲﾙ
 * @description MaterialUI4-HookAPIにPropsを渡してｽﾀｲﾙ取得
 */
const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    margin: "auto",
    width: "40%",
  },
})

/**
 * Appﾌﾟﾛﾊﾞｲﾀﾞｺﾝﾎﾟｰﾈﾝﾄ
 * @param props ﾌﾟﾛｯﾌﾟｽ
 * @returns Appﾋﾞｭｰ
 * @description 全ｺﾝﾎﾟｰﾈﾝﾄへHooksStateを配布
 */
const App: React.FC = (props: any) => {
  // tasksｽﾃｰﾄ定義
  const [tasks, setTasks] = useState([{ id: "", title: "" }])
  // inputｽﾃｰﾄ定義
  const [input, setInput] = useState("")
  // classesｽﾀｲﾙ定義
  const classes = useStyles()

  // loginｴﾌｪｸﾄ（ﾚﾝﾀﾞﾘﾝｸﾞ時ﾃﾞｰﾀﾌｪｯﾁして未ﾛｸﾞｲﾝ時はlogin画面遷移）
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      !user && props.history.push("login")
    })
    return () => unSub()
  })

  // tasksｴﾌｪｸﾄ（ﾚﾝﾀﾞﾘﾝｸﾞ時ﾃﾞｰﾀﾌｪｯﾁしてtasksｽﾃｰﾄ更新）
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title })),
      )
    })
    return () => unSub()
  }, [])

  /**
   * newTask関数
   * @param e ｲﾍﾞﾝﾄ関数（ﾎﾞﾀﾝｸﾘｯｸ時）
   * @description inputｽﾃｰﾄでﾃﾞｰﾀﾍﾞｰｽにﾃﾞｰﾀ追加してinputｽﾃｰﾄ初期化
   */
  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: input })
    setInput("")
  }

  // Appﾋﾞｭｰ
  return (
    <div className={styles.app__root}>
      <h1>Todo App by React/Firebase</h1>
      <button
        className={styles.app__logout}
        onClick={async () => {
          try {
            await auth.signOut()
            props.history.push("login")
          } catch (error: any) {
            alert(error.message)
          }
        }}
      >
        <ExitToAppIcon />
      </button>

      <br />
      <FormControl>
        <TextField
          className={classes.field}
          InputLabelProps={{
            shrink: true,
          }}
          label="New task ?"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </FormControl>
      <button className={styles.app__icon} disabled={!input} onClick={newTask}>
        <AddToPhotosIcon />
      </button>

      <List className={classes.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} title={task.title} />
        ))}
      </List>
    </div>
  )
}

export default App
