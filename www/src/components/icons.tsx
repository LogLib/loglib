import { cn } from "@/lib/utils"
import { LogOut, MoreHorizontal, Clipboard, ClipboardCopy, KeyIcon } from "lucide-react"
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
  Navigation,
  AlignLeft,
  Layout,
} from "lucide-react"
import Link from "next/link"

export type Icon = LucideIcon

export const Icons = {
  logo: ({ className }: { className?: string }) => (
    <svg width="40" height="40" viewBox="0 0 112 102" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M102.997 41.0937C102.66 41.2 102.362 41.4039 102.131 41.671L100.104 44.0141L71.3642 81.685C70.5322 82.7756 68.8743 82.724 68.1117 81.5838L47.2566 50.401C46.4686 49.2227 44.7388 49.2156 43.941 50.3873L25.4091 77.605C24.7293 78.6035 23.3262 78.7761 22.4247 77.972L10.348 67.2006C9.53248 66.4733 9.45171 65.2261 10.1666 64.3996L12.2283 62.0161C12.9576 61.1729 14.2356 61.0888 15.0691 61.8292L21.0031 67.0998C21.9046 67.9005 23.3044 67.7274 23.9837 66.7312L43.9408 37.4638C44.739 36.2933 46.4677 36.3009 47.2555 37.4784L68.4066 69.0915C69.1721 70.2357 70.8378 70.2824 71.6662 69.1829L90.3615 44.3682C91.3081 43.1117 90.4996 41.2701 88.9673 40.9137C86.8134 40.4126 84.7292 39.6282 82.7703 38.5768C79.7446 36.9529 77.0811 34.7264 74.943 32.0335C72.8049 29.3406 71.2372 26.2381 70.3358 22.916C69.6358 20.3362 69.3492 17.6661 69.482 15.0053C69.5427 13.7907 68.614 12.7134 67.3979 12.7134H6.77705C4.97969 12.7134 3.25595 13.4299 1.98502 14.7051C0.714098 15.9804 9.98328e-05 17.71 9.98328e-05 19.5134V94.3135C9.98328e-05 96.117 0.714098 97.8466 1.98502 99.1218C3.25595 100.397 4.97969 101.113 6.77705 101.113H101.654C103.452 101.113 105.175 100.397 106.446 99.1218C107.717 97.8466 108.431 96.117 108.431 94.3135V42.2061C108.431 40.6309 106.722 39.7402 105.276 40.3661C104.495 40.7046 103.997 40.7778 102.997 41.0937Z" className=" fill-black dark:fill-white" />
      <path d="M95.0576 34C104.415 34 112 26.3889 112 17C112 7.61116 104.415 0 95.0576 0C85.7006 0 78.1152 7.61116 78.1152 17C78.1152 26.3889 85.7006 34 95.0576 34Z" fill="#F9A858" />
    </svg>
  ),
  close: X,
  logoWithLetter: ({ className, logoClassName, headerClassName }: { className?: string, logoClassName?: string, headerClassName?: string }) => (
    <Link className={cn("flex  cursor-pointer items-end gap-2 ", className)} href="/" >
      <Icons.logo className={cn("h-14 w-14", logoClassName)} />
      <h2 className={cn(" text-5xl font-bold", headerClassName)}>
        LOGLIB
      </h2>
    </Link>
  ),
  spinner: Loader2,
  nav: AlignLeft,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  clipboard: ({ ...props }: LucideProps) => (
    <svg {...props} fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" ><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg>
  ),
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreHorizontal,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  layout: Layout,
  laptop: Laptop,
  key: KeyIcon,
  htmlLogo: () => (
    <svg className="h-4 w-4 fill-black dark:fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.32 5.5l1.759 19.774 7.893 2.226 7.948-2.226L25.68 5.5H6.32zm15.537 6.449H12.59l.207 2.488h8.854l-.687 7.479-4.937 1.361v.014h-.055l-4.978-1.375-.303-3.821h2.406l.179 1.925 2.695.728 2.708-.728.303-3.136h-8.415l-.645-7.341h12.155l-.22 2.406z"></path></g></svg>
  ),
  logout: LogOut,
  typescript: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z"></path> </g></svg>
  ),
  javascript: ({ className }: { className?: string }) => (
    <svg fill="#fff" className="h-4 w-4 fill-black dark:fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h32v32h-32zM29.38 24.37c-0.234-1.464-1.188-2.688-4.005-3.833-0.979-0.458-2.073-0.781-2.396-1.521-0.12-0.438-0.141-0.677-0.063-0.938 0.203-0.865 1.219-1.12 2.021-0.88 0.521 0.161 1 0.557 1.302 1.198 1.38-0.901 1.38-0.901 2.339-1.5-0.359-0.557-0.536-0.802-0.781-1.036-0.839-0.943-1.958-1.422-3.776-1.38l-0.943 0.12c-0.901 0.219-1.76 0.698-2.281 1.339-1.516 1.719-1.078 4.719 0.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938 0.318 1.563-1.161 2.063-2.625 1.88-1.078-0.24-1.677-0.781-2.339-1.781l-2.438 1.401c0.276 0.641 0.599 0.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339 0.036-0.12 0.318-0.943 0.099-2.198zM17.401 14.708h-2.995c0 2.583-0.016 5.151-0.016 7.74 0 1.641 0.083 3.151-0.182 3.615-0.443 0.917-1.573 0.802-2.089 0.641-0.526-0.26-0.797-0.62-1.104-1.141-0.089-0.141-0.151-0.26-0.172-0.26l-2.432 1.5c0.406 0.839 1 1.563 1.766 2.021 1.141 0.682 2.672 0.901 4.276 0.542 1.042-0.302 1.943-0.922 2.411-1.88 0.682-1.24 0.536-2.76 0.531-4.464 0.016-2.74 0-5.479 0-8.24z"></path> </g></svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  google: ({ ...props }: LucideProps) => {
    return (
      <svg {...props} viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m31.6814,34.8868c-1.9155,1.29-4.3586,2.0718-7.2514,2.0718-5.59,0-10.3395-3.7723-12.04-8.8541v-.0195c-.43-1.29-.6841-2.6582-.6841-4.085s.2541-2.795.6841-4.085c1.7005-5.0818,6.45-8.8541,12.04-8.8541,3.1664,0,5.9809,1.0945,8.2286,3.2055l6.1568-6.1568c-3.7332-3.4791-8.5805-5.6095-14.3855-5.6095-8.4045,0-15.6559,4.8277-19.1936,11.8641-1.4659,2.8927-2.3064,6.1568-2.3064,9.6359s.8405,6.7432,2.3064,9.6359v.0195c3.5377,7.0168,10.7891,11.8445,19.1936,11.8445,5.805,0,10.6718-1.9155,14.2291-5.1991,4.0655-3.7527,6.4109-9.2645,6.4109-15.8123,0-1.5245-.1368-2.9905-.3909-4.3977h-20.2491v8.3264h11.5709c-.5082,2.6777-2.0327,4.945-4.3195,6.4695h0Z"></path></g></svg>
    )
  },
  wordpress: ({ ...props }: LucideProps) => {
    return (
      <svg {...props} width={20} height={20} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <path d="M128,256c0,50.625,29.438,94.438,72.156,115.156l-61.078-167.25C131.969,219.828,128,237.438,128,256z"></path> <path d="M258.266,267.203l-38.422,111.594c11.469,3.359,23.594,5.203,36.172,5.203c14.891,0,29.188-2.594,42.5-7.281 c-0.344-0.547-0.656-1.094-0.906-1.75L258.266,267.203z"></path> <path d="M342.406,249.547c0-15.828-5.688-26.797-10.547-35.312c-6.484-10.547-12.562-19.453-12.562-30.016 c0-11.766,8.906-22.703,21.5-22.703c0.547,0,1.094,0.062,1.641,0.109C319.672,140.75,289.344,128,256.016,128 c-44.734,0-84.078,22.953-106.953,57.688c3,0.109,5.828,0.172,8.234,0.172c13.391,0,34.141-1.641,34.141-1.641 c6.875-0.391,7.688,9.719,0.781,10.562c0,0-6.906,0.797-14.656,1.219l46.625,138.625l28.016-84L232.25,196 c-6.891-0.422-13.422-1.219-13.422-1.219c-6.891-0.422-6.078-10.953,0.828-10.562c0,0,21.125,1.641,33.703,1.641 c13.375,0,34.125-1.641,34.125-1.641c6.891-0.391,7.703,9.719,0.797,10.562c0,0-6.906,0.797-14.641,1.219l46.266,137.562 l12.766-42.656C339.156,274.281,342.406,260.5,342.406,249.547z"></path> <path d="M369.203,207.766c0,12.969-2.438,27.562-9.75,45.828l-39.078,113.031C358.406,344.438,384,303.219,384,256 c0-22.266-5.672-43.172-15.672-61.422C368.875,198.688,369.203,203.047,369.203,207.766z"></path> </g> </g></svg>
    )
  }
}
