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

interface schemaInfoDialog {
  tagButton: string
  title?: string
  description?: string
  field_first?: string
  field_second?: string
  field_third?: string
  placeholder_first?: string 
  placeholder_second?: string
  placeholder_third?: string
}

export function DialogDemo({ 
  tagButton, title, description, field_first, field_second, field_third, placeholder_first,
  placeholder_second, placeholder_third }: schemaInfoDialog) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <Button className="bg-green-700 text-white font-semibold hover:bg-green-600">
                {tagButton}
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">{field_first}</Label>
              <Input id="name-1" name="name" defaultValue={placeholder_first} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">{field_second}</Label>
              <Input id="username-1" name="username" defaultValue={placeholder_second} />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="username-1">{field_third}</Label>
              <Input id="username-1" name="username" defaultValue={placeholder_third} />
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
