import { ConstructorType } from "./constructor-type";
import { MappableType } from "./mappable-type";
import { MapperFor } from "./mapper-for";

export interface Mappable {
  map<TSource extends MappableType<TSource>, TDestination>(
    source: TSource,
    DestinationCtor: ConstructorType<TDestination>
  ): MapperFor<TSource, TDestination>;
}
