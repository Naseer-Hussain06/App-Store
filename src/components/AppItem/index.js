import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="list-item">
      <img src={imageUrl} alt="appName" className="app-image" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
