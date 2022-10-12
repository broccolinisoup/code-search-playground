import { Box, Text, StyledOcticon } from '@primer/react'
import React, { useEffect } from 'react'
import {
  MarkGithubIcon,
  CheckIcon,
  CommentIcon,
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  CommentDiscussionIcon,
  PlayIcon,
  ProjectIcon,
  ShieldLockIcon,
  GraphIcon,
  GearIcon,
  MortarBoardIcon,
} from '@primer/octicons-react'

import { UnderlineNav } from '@primer/react/drafts'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useMatch,
  useResolvedPath,
  useNavigate,
  NavigateOptions,
  useLocation,
} from 'react-router-dom'

function Playground() {
  const items = [
    { navigation: 'Code', icon: CodeIcon, href: '/code' },
    {
      navigation: 'Issues',
      icon: IssueOpenedIcon,
      counter: 120,
      href: '/issues',
    },
    {
      navigation: 'Pull Requests',
      icon: GitPullRequestIcon,
      counter: 13,
      href: '/pulls',
    },
    {
      navigation: 'Discussions',
      icon: CommentDiscussionIcon,
      counter: 5,
      href: '/discussions',
    },
    { navigation: 'Actions', icon: PlayIcon, counter: 4, href: '/actions' },
    {
      navigation: 'Projects',
      icon: ProjectIcon,
      counter: 9,
      href: '/projects',
    },
    { navigation: 'Insights', icon: GraphIcon, href: '/insights' },
    { navigation: 'Settings', icon: GearIcon, counter: 10, href: '/settings' },
    { navigation: 'Security', icon: ShieldLockIcon, href: '/security' },
  ]

  const navigate = useNavigate()
  const handleSelect = (href, navigation) => {
    console.log('handleSelect', href)
    navigate(href)
    setSelectedItem(navigation)
  }
  const { pathname } = useLocation()

  const [selectedItem, setSelectedItem] = React.useState(0)
  useEffect(() => {
    console.log(pathname)
    setSelectedItem(pathname)
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: 'canvas.default',
        width: '100%',
        minHeight: '100vh',
        paddingX: 0,
        paddingY: 8,
      }}
    >
      <UnderlineNav aria-label="Repository">
        {items.map((item) => (
          <UnderlineNav.Item
            key={item.navigation}
            as={Link}
            icon={GitPullRequestIcon}
            counter={item.counter}
            to={item.href}
            onSelect={() => {
              handleSelect(item.href, item.navigation)
            }}
            selected={selectedItem === item.href}
          >
            {item.navigation}
          </UnderlineNav.Item>
        ))}
      </UnderlineNav>

      <Routes>
        <Route path="/" element={<Code />}></Route>
        <Route path="/code" element={<Code />}></Route>
        <Route path="/issues" element={<Issues />}></Route>
        <Route path="/pulls" element={<PullRequests />}></Route>
        <Route path="/discussions" element={<Discussions />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  )
}

function Code() {
  return <div>Code</div>
}
function Issues() {
  return <div>Issues</div>
}
function PullRequests() {
  return <div>Pull Requests'</div>
}

function Discussions() {
  return <div>Discussions</div>
}
function NotFound() {
  return <div>Not found</div>
}
export default Playground
