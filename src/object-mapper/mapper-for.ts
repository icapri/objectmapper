import { ConstructorType } from "./constructor-type";
import { MappableType } from "./mappable-type";

export class MapperFor<TSource extends MappableType<TSource>, TDestination> {
  get done(): TDestination {
    return this.destination;
  }

  constructor(
    private source: TSource,
    private DestinationCtor: ConstructorType<TDestination>,
    private destination = new DestinationCtor(),
    private mappedKeys: Array<keyof TDestination> = []
  ) {
  }

  for<TDestKey extends keyof TDestination>(
    key: TDestKey,
    mapFrom: (source: TSource) => TDestination[TDestKey]
  ): MapperFor<TSource, TDestination> {
    this.destination[key] = mapFrom(this.source);
    this.mappedKeys.push(key);
    return new MapperFor<TSource, TDestination>(
      this.source,
      this.DestinationCtor,
      this.destination,
      this.mappedKeys
    );
  }
}
