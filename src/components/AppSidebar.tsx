
import { Download, MonitorPlay } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

interface AppSidebarProps {
  currentLesson: number;
}

const lessons = [
  { number: 1, title: "Introdução ao Instituto Arvoredo", downloadUrl: "/slides-aula1.pdf", path: "/" },
  { number: 2, title: "História dos Computadores", downloadUrl: "/slides-aula2.pdf", path: "/aula2" },
  { number: 3, title: "Em breve", downloadUrl: "/slides-aula3.pdf", path: "#" },
  { number: 4, title: "Em breve", downloadUrl: "/slides-aula4.pdf", path: "#" },
  { number: 5, title: "Em breve", downloadUrl: "/slides-aula5.pdf", path: "#" },
];

export function AppSidebar({ currentLesson }: AppSidebarProps) {
  const currentLessonData = lessons.find(lesson => lesson.number === currentLesson);

  return (
    <Sidebar className="bg-[#1e1b4b] text-white">
      <SidebarContent>
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold">Curso de Informática</h2>
          <p className="text-sm text-white/70">Instituto Arvoredo</p>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70">Aulas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {lessons.map((lesson) => (
                <SidebarMenuItem key={lesson.number}>
                  <SidebarMenuButton
                    asChild
                    className={`text-white hover:bg-white/10 ${currentLesson === lesson.number ? 'bg-white/20' : ''}`}
                    tooltip={lesson.title}
                  >
                    <Link to={lesson.path}>
                      <MonitorPlay className="w-4 h-4" />
                      <span>Aula {lesson.number}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <a
            href={currentLessonData?.downloadUrl}
            download
            className="flex items-center gap-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Material da Aula {currentLesson}</span>
          </a>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
