import './index.css'

const TabItem = props => {
  const {activeTabId, tabDetails, onTabClick} = props
  const {tabId, displayText} = tabDetails
  const isActive = activeTabId === tabId
  const cls = isActive ? 'activeUnderline' : ''
  const tabClick = () => {
    onTabClick(tabId)
  }
  return (
    <li>
      <button type="button" onClick={tabClick} className={cls}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
