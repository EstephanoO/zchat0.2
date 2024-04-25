'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useModalState } from "@/hooks/use-modal-store"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import Link from "next/link"
import { createMeet } from "@/services/meet-api"

//status tiene que ser uno de 3 'pending' 'closed' 'open'
const orgSchema = z.object({
  name: z.string().min(2, { message: 'Nombre muy corto' }),
  status: z.string().min(2, { message: 'Status muy corto' }),
  description: z.string(),
  orgId: z.string()

})

export const CreateMeetModal= () => {
    const { isOpen, onClose, type,data} = useModalState()
  
    const isModalOpen = isOpen && type === 'createMeet'
  
    const form = useForm({
      resolver: zodResolver(orgSchema),
      defaultValues: {
        name: '',
        status: '',
        description: '',
        orgId: ''
      }
    })
      
  const isLoading = form.formState.isSubmitting
  
  const onSubmit = async (values: z.infer<typeof orgSchema>) => {
    try {
        createMeet(values)
      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
<Dialog open={isModalOpen} onOpenChange={onClose}>
  <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
         <DialogTitle className="text-2xl text-center font-bold">
            Crea una reunion
          </DialogTitle> 
        <DialogDescription className="text-center text-zinc-600">
          Crea tu reunion para empezar a colaborar 
        </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-8 px-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-300 dark:text-secondary/70">
                                Nombre de la Reunion
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isLoading}
                                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                placeholder="Nombre"/>
                            </FormControl>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="status"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-300 dark:text-secondary/70">
                                Status
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isLoading}
                                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                placeholder="Status"/>
                            </FormControl>
                        </FormItem>
                    )}
                    />
 <FormField
          control={form.control}
          name="orgId"
          render={({ field }) => (
            <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-300 dark:text-secondary/70">
                Organizacion</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu organizacion" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {data.servers?.map((serve) => (
                  <SelectItem key={serve.id} value={serve.id}>{serve.name}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
                </div>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                <Button disabled={isLoading}>
                    Create
                </Button>
</DialogFooter>


            </form>
        </Form>
  </DialogContent>
</Dialog>
  )
}

