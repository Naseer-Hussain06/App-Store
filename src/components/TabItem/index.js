import './index.css'

const TabItem = props => {
  const {displayItem, updateTabId, isActive} = props
  const {displayText, tabId} = displayItem
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickButton = () => {
    updateTabId(tabId)
  }

  return (
    <li>
      <button type="button" className={tabBtnClassName} onClick={onClickButton}>
        <p className="tab-item-name">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
