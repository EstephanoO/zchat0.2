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
import { createOrg } from "@/services/org-api"
import db from "@/lib/db"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const orgSchema = z.object({
  name: z.string().min(2, { message: 'Nombre muy corto' }),
  users: z.array(z.string()).optional(),
  logo: z.string().url()
})

export const CreateOrgModal= () => {
    const { isOpen, onClose, type} = useModalState()
  
    const isModalOpen = isOpen && type === 'createServer'
  
    const form = useForm({
      resolver: zodResolver(orgSchema),
      defaultValues: {
        name: '',
        users: [],
        logo: ''
      }
    })
      
  const isLoading = form.formState.isSubmitting
  
  const onSubmit = async (values: z.infer<typeof orgSchema>) => {
    try {
        console.log(values)
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
            Crea tu Organizacion
          </DialogTitle> 
        <DialogDescription className="text-center text-zinc-600">
          Crea tu organizacion para empezar a colaborar con tus amigos
        </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-8 px-6">
                    <div className="flex items-center justify-center text-center">
                        Sube el Logo de tu Organizacion
                    </div>

                    <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-200 dark:text-secondary/70">
                                Nombre de la Organizacion
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
