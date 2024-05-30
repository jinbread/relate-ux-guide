import {
    Avatar,
    AvatarFallback,
  } from "@/components/ui/avatar"
  import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import { Ellipsis, Mail } from "lucide-react";
  
  
  function getInitials(name: string): string {
    const words = name.split(' ')
    const initials = words.map(word => word.charAt(0))
    return initials.join('')
  }
  
  function generateEmail(fullName: string, domain: string): string {
    const [firstName, lastName] = fullName.split(' ')
    const firstNameLower = firstName.toLowerCase();
    const lastNameLower = lastName.toLowerCase()
    const email = `${firstNameLower}.${lastNameLower}@${domain}`
    return email
  }
  
  const position = ["CEO", "Product Engineer", "Product Desginer", "Account Manager", "Product Manager", "Business Development Mananger", "People Manager", "CISO"]
  const domain = ["indeed.com", "stripe.com", "linear.app", "navercorp.com", "google.com", "korea.ac.kr"]
  
  function getRandomElement<T>(array: T[]): T {
    const length = array.length
    const randomIndex = Math.floor(Math.random() * length)
    return array[randomIndex]
  }
  
  
  export default function ContactCard(props: any) {
    const initials = getInitials(props.name)
    return (
      <Card className="hover:bg-slate-50">
        <CardContent className="p-4 overflow-hidden">
            <div className="flex space-x-4">
                <Avatar>
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex grow flex-col space-y-1">
                    <p className="text-sm font-medium">{props.name}</p>
                    <p className="text-sm text-muted-foreground">
                        {getRandomElement(position)}
                    </p>
                    <div className="flex items-center pt-1">
                        <Mail className="mr-1 h-3 w-3 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                            {generateEmail(props.name, getRandomElement(domain))}              
                        </span>
                    </div>
                </div>
                <Ellipsis className="w-4 h-4 text-slate-400" />
            </div>
        </CardContent>
      </Card>
    )
  }
  