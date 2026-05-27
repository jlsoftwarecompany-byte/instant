export interface User {
  id: number;
  username: string;
  nickname: string;
  created_at: string;
  links: number;
  push_subscription?: string | null;
  linker_avatar?: string;
  linker_color?: string;
  session_token?: string | null;
  session_expires_at?: string | null;
}

export interface Friendship {
  id: number;
  requester_username: string;
  receiver_username: string;
  status: 'pending' | 'accepted';
  created_at: string;
}

export interface Conversation {
  id: number;
  participant_1: string;
  participant_2: string;
  started_at: string;
  conversation_started: number; // 0 or 1
  saved: number; // 0 or 1
}

export interface Timer {
  id: number;
  conversation_id: number;
  timer_type: 'opener' | 'response' | 'cooldown';
  started_at: string; // ISO string or timestamp
  duration_ms: number;
}

export interface Message {
  id: number;
  conversation_id: number;
  sender: string;
  receiver: string;
  content: string;
  sent_at: number; // UTC ms timestamp
  timer_duration: number; // ms duration
  expired: number; // 0 or 1
  is_photo: number; // 0 or 1
  photoData?: string;
}

export interface TimerState {
  conversation_id: number;
  timer_type: 'opener' | 'response' | 'cooldown';
  started_at: number; // MS timestamp
  duration_ms: number;
}
