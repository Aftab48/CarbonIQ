import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Define the schema with the actual form fields
const formSchema = z.object({
  electricBill: z
    .string()
    .min(1, { message: "Electric bill is required." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Electric bill must be a positive number.",
    }),

  gasBill: z
    .string()
    .min(1, { message: "Gas bill is required." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Gas bill must be a positive number.",
    }),

  oilBill: z
    .string()
    .min(1, { message: "Oil bill is required." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Oil bill must be a positive number.",
    }),

  carMileage: z
    .string()
    .min(1, { message: "Car mileage is required." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Car mileage must be a positive number.",
    }),

  shortFlights: z
    .string()
    .min(1, { message: "Number of short flights is required." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Number of short flights must be a positive number.",
    }),

  longFlights: z
    .string()
    .min(1, { message: "Number of long flights is required." })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Number of long flights must be a positive number.",
    }),

  recycleNewspapers: z.boolean().default(false),
  recycleAluminums: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;
interface CarbonCalculatorProps {
  onSubmit: (data: FormData) => void;
}

const CarbonCalculator: React.FC<CarbonCalculatorProps> = ({ onSubmit }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Monthly Electric Bill */}
        <FormField
          control={form.control}
          name="electricBill"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Monthly Electric Bill (INR)"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Monthly Gas Bill */}
        <FormField
          control={form.control}
          name="gasBill"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Monthly Gas Bill (INR)"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Monthly Oil Bill */}
        <FormField
          control={form.control}
          name="oilBill"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Monthly Oil Bill (INR)"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Yearly Car Mileage */}
        <FormField
          control={form.control}
          name="carMileage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Yearly Car Mileage"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Number of Short Flights */}
        <FormField
          control={form.control}
          name="shortFlights"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Number of Short Flights"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Number of Long Flights */}
        <FormField
          control={form.control}
          name="longFlights"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Number of Long Flights"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Recycle Newspapers */}
        <FormField
          control={form.control}
          name="recycleNewspapers"
          render={({ field }) => (
            <FormItem>
              <div className="flex text-white items-center space-x-2">
                <Checkbox
                  id="recycleNewspapers"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label
                  htmlFor="recycleNewspapers"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Do you Recycle Newspapers?
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="recycleAluminums"
          render={({ field }) => (
            <FormItem>
              <div className="flex text-white items-center space-x-2">
                <Checkbox
                  id="recycleAluminums"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label
                  htmlFor="recycleAluminums"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Do you Recycle Aluminums?
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-fit text-lg flex items-center justify-center bg-[#3DC19E]">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CarbonCalculator;
