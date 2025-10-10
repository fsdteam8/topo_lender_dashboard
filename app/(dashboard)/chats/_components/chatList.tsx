'use client'
import { Search, User } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  conversations: any[]
  activeConversation: string
  onSelect: (id: string) => void
}

export default function ChatList({
  conversations,
  activeConversation,
  onSelect,
}: Props) {
  console.log('conversations ', conversations)
  return (
    <div className="w-full md:w-1/3">
      <div className=" mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-[16px] h-5 w-5 text-[#595959]" />
          <Input
            placeholder="SEARCH MESSAGE....."
            className="pl-11 py-6 border-[#E6E6E6] bg-white focus-visible:ring-0 text-sm"
          />
        </div>
      </div>

      <div className="overflow-y-auto scrollbar-hide max-h-[400px] md:max-h-[544px]">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-4 flex items-start gap-3 rounded-md cursor-pointer hover:bg-red-50 border-b ${
              activeConversation === conversation.id ? 'bg-red-100' : ''
            }`}
            onClick={() => onSelect(conversation.id)}
          >
            <div className="bg-red-300 rounded-full p-2 flex-shrink-0">
              <User className="h-5 w-5 text-pink-800" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="font-normal tracking-wide text-sm">
                  {conversation.name}
                </p>
                <span className="text-xs text-gray-500">
                  {conversation.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate pt-2">
                {conversation.preview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
