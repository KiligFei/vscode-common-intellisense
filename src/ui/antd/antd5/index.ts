import { componentsReducer, propsReducer } from '../../utils'
import Divider from './divider.json'
import Row from './row.json'
import Col from './col.json'
import Layout from './layout.json'
import Sider from './sider.json'
import Space from './space.json'
import Button from './button.json'
import Icon from './icon.json'
import Text from './text.json'
import Title from './title.json'
import Paragraph from './paragraph.json'
import Anchor from './anchor.json'
import BreadCrumb from './breadCrumb.json'
import Dropdown from './dropdown.json'
import DropdownButton from './dropdownButton.json'
import Menu from './menu.json'
import Pagination from './pagination.json'
import Steps from './steps.json'
import AutoComplete from './autoComplete.json'
import Cascader from './cascader.json'
import Checkbox from './checkbox.json'
import CheckboxGroup from './checkboxGroup.json'
import ColorPicker from './colorPicker.json'
import DatePicker from './datePicker.json'
import RangePicker from './rangePicker.json'
import Form from './form.json'
import FormItem from './formItem.json'
import Input from './input.json'
import InputNumber from './inputNumber.json'
import InputPassword from './inputPassword.json'
import InputSearch from './inputSearch.json'
import InputTextArea from './InputTextArea.json'
import Mentions from './mentions.json'
import Radio from './radio.json'
import RadioGroup from './radioGroup.json'
import Rate from './rate.json'
import Select from './select.json'
import Slider from './slider.json'
import Switch from './switch.json'
import TimePicker from './timePicker.json'
import Transfer from './transfer.json'
import TreeSelect from './treeSelect.json'
import Upload from './upload.json'
import Avatar from './avatar.json'
import AvatarGroup from './avatarGroup.json'
import Badge from './badge.json'
import BadgeRibbon from './badegRibbon.json'
import Calender from './calendar.json'
import Card from './card.json'
import CardGrid from './cardGrid.json'
import CardMeta from './cardMeta.json'
import Carousel from './Carousel.json'
import Collapse from './collapse.json'
import CollapsePanel from './collapsePanel.json'
import Descriptions from './descriptions.json'
import DescriptionItem from './descriptionItem.json'
import Empty from './empty.json'
import Image from './image.json'
import ImagePreviewGroup from './imagePreviewGroup.json'
import List from './list.json'
import ListItemMeta from './listItemMeta.json'
import ListItem from './listItem.json'
import Popover from './popover.json'
import QRCode from './qrCode.json'
import Segmented from './segmented.json'
import Statistic from './statistic.json'
import StatisticCountdown from './statisticCountdown.json'
import Table from './table.json'
import Tabs from './tabs.json'
import Tag from './tag.json'
import TagCheckableTag from './tagCheckableTag.json'
import Timeline from './timeline.json'
import Tooltip from './tooltip.json'
import Tour from './tour.json'
import Tree from './tree.json'

export function antd5() {
  const map: any = [
    Divider,
    Row,
    Col,
    Layout,
    Sider,
    Space,
    Button,
    Icon,
    Text,
    Title,
    Paragraph,
    Anchor,
    BreadCrumb,
    Dropdown,
    DropdownButton,
    Menu,
    Pagination,
    Steps,
    AutoComplete,
    Cascader,
    Checkbox,
    CheckboxGroup,
    ColorPicker,
    DatePicker,
    RangePicker,
    Form,
    FormItem,
    Input,
    InputNumber,
    InputPassword,
    InputSearch,
    InputTextArea,
    Mentions,
    Radio,
    RadioGroup,
    Rate,
    Select,
    Slider,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Avatar,
    AvatarGroup,
    Badge,
    BadgeRibbon,
    Calender,
    Card,
    CardGrid,
    CardMeta,
    Carousel,
    Collapse,
    CollapsePanel,
    Descriptions,
    DescriptionItem,
    Empty,
    Image,
    ImagePreviewGroup,
    List,
    ListItem,
    ListItemMeta,
    Popover,
    QRCode,
    Segmented,
    Statistic,
    StatisticCountdown,
    Table,
    Tabs,
    Tag,
    TagCheckableTag,
    Timeline,
    Tooltip,
    Tour,
    Tree,
  ]

  return propsReducer(map)
}

export function antd5Components() {
  const map = [
    ['Row', '布局'],
    ['Col', '布局'],
    ['Content', '内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中'],
    ['Header', '顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
    ['Sider', '侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。'],
    ['Layout', '布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。'],
    ['Footer', '底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。'],
    ['Button', '按钮'],
    ['Space', '间距'],
    ['Anchor', '锚点'],
    ['radio', '单选框'],
    ['radio-group', '单选框组'],
    ['radio-button', '按钮样式的单选组合'],
    ['checkbox', '多选框'],
    ['checkbox-group', '多选框组'],
    ['checkbox-button', '按钮样式的多选组合'],
    ['input', '输入框'],
    ['input-number', '计数器'],
    ['select', '选择器'],
    ['option', '基础多选'],
    ['option-group', '备选项进行分组展示'],
    ['cascader', '级联选择器'],
    ['switch', '开关'],
    ['slider', '滑块'],
    ['time-select', '时间选择器'],
    ['date-picker', '日期选择器/日期时间选择器'],
    ['upload', '上传'],
    ['rate', '评分'],
    ['color-picker', '颜色选择器'],
    ['transfer', '穿梭框'],
    ['form', '表单'],
    ['form-item', '表单项'],
    ['table', '表格'],
    ['table-column', '表格项'],
    ['tag', '标签'],
    ['progress', '进度条'],
    ['tree', '树形控件'],
    ['Pagination', '分页'],
    ['badge', '标记'],
    ['avatar', '头像'],
    ['skeleton', '骨架屏'],
    ['empty', '空状态'],
    ['descriptions', '描述列表'],
    ['descriptions-item', '描述列表项'],
    ['result', '结果'],
    ['statistic', '统计数值'],
    ['alert', '警告'],
    ['Menu', '导航菜单'],
    ['tabs', '标签页'],
    ['tab-pane', '标签项'],
    ['breadcrumb', '面包屑'],
    ['breadcrumb-item', '面包屑项'],
    ['page-header', '页头'],
    ['Dropdown', '下拉菜单'],
    ['Steps', '步骤条'],
    ['dialog', '对话框'],
    ['tooltip', '文字提示'],
    ['popover', '弹出框'],
    ['popconfirm', '气泡确认框'],
    ['card', '卡片'],
    ['carousel', '走马灯'],
    ['carousel-item', '走马灯项'],
    ['collapse', '折叠面板'],
    ['collapse-item', '折叠面板项'],
    ['timeline', '时间线'],
    ['timeline-item', '时间线项'],
    ['divider', '分割线'],
    ['calendar', '日历'],
    ['image', '图片'],
    ['backtop', '回到顶部'],
    ['drawer', '抽屉'],
  ]
  return componentsReducer(map)
}
