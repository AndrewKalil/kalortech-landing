export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      actions: {
        Row: {
          config: Json
          created_at: string
          deleted_at: string | null
          id: string
          name: string
          tenant_id: string
          type: Database["public"]["Enums"]["action_type"]
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          deleted_at?: string | null
          id?: string
          name: string
          tenant_id: string
          type: Database["public"]["Enums"]["action_type"]
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          deleted_at?: string | null
          id?: string
          name?: string
          tenant_id?: string
          type?: Database["public"]["Enums"]["action_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "actions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      components: {
        Row: {
          created_at: string
          deleted_at: string | null
          display_order: number
          id: string
          key: string
          page_id: string
          props: Json
          tenant_id: string
          type: Database["public"]["Enums"]["component_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          key: string
          page_id: string
          props?: Json
          tenant_id: string
          type: Database["public"]["Enums"]["component_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          key?: string
          page_id?: string
          props?: Json
          tenant_id?: string
          type?: Database["public"]["Enums"]["component_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "components_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "components_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      data_source_entries: {
        Row: {
          created_at: string
          data: Json
          data_source_id: string
          deleted_at: string | null
          display_order: number
          id: string
          tenant_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          data?: Json
          data_source_id: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          tenant_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          data?: Json
          data_source_id?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_source_entries_data_source_id_fkey"
            columns: ["data_source_id"]
            isOneToOne: false
            referencedRelation: "data_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "data_source_entries_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      data_sources: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          name: string
          schema: Json
          slug: string
          tenant_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          name: string
          schema?: Json
          slug: string
          tenant_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          name?: string
          schema?: Json
          slug?: string
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_sources_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery: {
        Row: {
          created_at: string
          deleted_at: string | null
          display_order: number
          id: string
          image_url: string
          tenant_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          image_url: string
          tenant_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          image_url?: string
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          config: Json
          created_at: string
          deleted_at: string | null
          display_order: number
          id: string
          is_core: boolean
          slug: string
          tenant_id: string
          title: string
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          is_core?: boolean
          slug: string
          tenant_id: string
          title: string
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          id?: string
          is_core?: boolean
          slug?: string
          tenant_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pages_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          address: string | null
          business_name: string
          city: string | null
          config: Json
          created_at: string
          deleted_at: string | null
          domain: string | null
          email: string | null
          established_date: string | null
          id: string
          phone: string | null
          slug: string
          state: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          business_name: string
          city?: string | null
          config?: Json
          created_at?: string
          deleted_at?: string | null
          domain?: string | null
          email?: string | null
          established_date?: string | null
          id?: string
          phone?: string | null
          slug: string
          state?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          business_name?: string
          city?: string | null
          config?: Json
          created_at?: string
          deleted_at?: string | null
          domain?: string | null
          email?: string | null
          established_date?: string | null
          id?: string
          phone?: string | null
          slug?: string
          state?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: string
          role: string
          tenant_id: string | null
        }
        Insert: {
          created_at?: string
          id: string
          role: string
          tenant_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      attach_updated_at_trigger: { Args: { tbl: string }; Returns: undefined }
      current_tenant_id: { Args: never; Returns: string }
      is_super_admin: { Args: never; Returns: boolean }
      sync_actions: {
        Args: { p_actions: Json; p_tenant_id: string }
        Returns: undefined
      }
      sync_components: {
        Args: { p_components: Json; p_page_id: string; p_tenant_id: string }
        Returns: undefined
      }
      sync_data_source_entries: {
        Args: { p_data_source_id: string; p_entries: Json; p_tenant_id: string }
        Returns: undefined
      }
      sync_data_sources: {
        Args: { p_data_sources: Json; p_tenant_id: string }
        Returns: undefined
      }
      sync_pages: {
        Args: { p_pages: Json; p_tenant_id: string }
        Returns: undefined
      }
      upsert_characteristic: {
        Args: {
          p_asset_id: string
          p_key: string
          p_label?: string
          p_type?: string
          p_unit?: string
          p_value: string
        }
        Returns: undefined
      }
    }
    Enums: {
      action_type: "navigation"
      asset_status: "active" | "inactive" | "in_maintenance" | "decommissioned"
      characteristic_type: "number" | "date" | "text" | "options" | "boolean"
      component_type:
        | "hero"
        | "split"
        | "grid"
        | "mosaic"
        | "cta"
        | "timeline"
        | "contact"
        | "gallery"
        | "container"
        | "heading"
        | "text"
        | "image"
        | "button"
        | "split_list"
      condition_operator:
        | "gte"
        | "lte"
        | "gt"
        | "lt"
        | "eq"
        | "neq"
        | "between"
        | "in"
      condition_source: "field" | "characteristic"
      document_tag: "official" | "service" | "parts" | "photo" | "other"
      document_type: "image" | "documentation"
      notification_channel: "in_app" | "email" | "sms" | "push"
      notification_type:
        | "upcoming_maintenance"
        | "overdue"
        | "task_assigned"
        | "task_completed"
        | "document_added"
        | "asset_status_changed"
      plan_status: "active" | "paused" | "retired"
      priority_level: "low" | "medium" | "high" | "critical"
      recipient_type: "technician" | "manager"
      service_type: "maintenance" | "fix"
      task_status: "pending" | "in_progress" | "done" | "skipped" | "overdue"
      technician_level: "junior" | "mid" | "senior" | "lead"
      technician_role: "technician" | "manager"
      technician_specialization:
        | "mechanical"
        | "electrical"
        | "hydraulics"
        | "general"
      technician_status: "active" | "inactive" | "on_leave"
      trigger_type:
        | "interval_time"
        | "interval_hours"
        | "interval_mileage"
        | "one_time"
        | "manual"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      action_type: ["navigation"],
      asset_status: ["active", "inactive", "in_maintenance", "decommissioned"],
      characteristic_type: ["number", "date", "text", "options", "boolean"],
      component_type: [
        "hero",
        "split",
        "grid",
        "mosaic",
        "cta",
        "timeline",
        "contact",
        "gallery",
        "container",
        "heading",
        "text",
        "image",
        "button",
        "split_list",
      ],
      condition_operator: [
        "gte",
        "lte",
        "gt",
        "lt",
        "eq",
        "neq",
        "between",
        "in",
      ],
      condition_source: ["field", "characteristic"],
      document_tag: ["official", "service", "parts", "photo", "other"],
      document_type: ["image", "documentation"],
      notification_channel: ["in_app", "email", "sms", "push"],
      notification_type: [
        "upcoming_maintenance",
        "overdue",
        "task_assigned",
        "task_completed",
        "document_added",
        "asset_status_changed",
      ],
      plan_status: ["active", "paused", "retired"],
      priority_level: ["low", "medium", "high", "critical"],
      recipient_type: ["technician", "manager"],
      service_type: ["maintenance", "fix"],
      task_status: ["pending", "in_progress", "done", "skipped", "overdue"],
      technician_level: ["junior", "mid", "senior", "lead"],
      technician_role: ["technician", "manager"],
      technician_specialization: [
        "mechanical",
        "electrical",
        "hydraulics",
        "general",
      ],
      technician_status: ["active", "inactive", "on_leave"],
      trigger_type: [
        "interval_time",
        "interval_hours",
        "interval_mileage",
        "one_time",
        "manual",
      ],
    },
  },
} as const
