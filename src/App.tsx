import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PhoneAgentsPage from './pages/PhoneAgentsPage'
import ChatAgentsPage from './pages/ChatAgentsPage'
import VisibilityPage from './pages/VisibilityPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import {
  BlogPage,
  ComparePage,
  EventsPage,
  IndustriesIndexPage,
  IndustryPage,
  LearnPage,
  LimitlessAiPage,
  LocationsPage,
  NotFoundPage,
  PartnersPage,
  PrivacyPage,
  SolutionsPage,
  SuccessStoriesPage,
  TermsPage,
} from './pages/MiscPages'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="phone-agents" element={<PhoneAgentsPage />} />
        <Route path="chat-agents" element={<ChatAgentsPage />} />
        <Route path="always-on-visibility" element={<VisibilityPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="success-stories" element={<SuccessStoriesPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="limitless-ai" element={<LimitlessAiPage />} />
        <Route path="industries" element={<IndustriesIndexPage />} />
        <Route path="industries/:slug" element={<IndustryPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
