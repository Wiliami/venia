import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <Button className="bg-green-700 text-white font-semibold hover:bg-green-600">
                + Criar nova Campanha
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nova campanha</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Nome da campanha" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Objetivo da campanha</Label>
              <Input id="username-1" name="username" defaultValue="Engajamento" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="username-1">Público</Label>
              <Input id="username-1" name="username" defaultValue="Aberto" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="bg-red-500 hover:bg-red-600 text-white">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className="bg-green-400 hover:bg-green-500">Criar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
